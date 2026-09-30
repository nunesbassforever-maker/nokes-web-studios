-- Execute in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  company_name text,
  avatar_url text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role text not null default 'client' check (role in ('admin','client')),
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  category text not null,
  status text not null default 'orcamento',
  progress integer not null default 0 check (progress between 0 and 100),
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  whatsapp text,
  project_type text,
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin() returns boolean language sql security definer set search_path = public stable as $$
  select exists(select 1 from public.user_roles where user_id = auth.uid() and role = 'admin');
$$;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id,email,full_name,company_name) values(new.id,new.email,new.raw_user_meta_data->>'full_name',new.raw_user_meta_data->>'company_name') on conflict (id) do nothing;
  insert into public.user_roles(user_id,role) values(new.id,'client') on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.projects enable row level security;
alter table public.contact_messages enable row level security;

create policy "profile own or admin" on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy "profile own update" on public.profiles for update using (id = auth.uid());
create policy "roles own or admin" on public.user_roles for select using (user_id = auth.uid() or public.is_admin());
create policy "projects own or admin" on public.projects for select using (user_id = auth.uid() or public.is_admin());
create policy "admin projects insert" on public.projects for insert with check (public.is_admin());
create policy "admin projects update" on public.projects for update using (public.is_admin());
create policy "admin projects delete" on public.projects for delete using (public.is_admin());
create policy "public contact insert" on public.contact_messages for insert with check (true);
create policy "admin contact read" on public.contact_messages for select using (public.is_admin());
create policy "admin contact update" on public.contact_messages for update using (public.is_admin());

-- Depois de criar o usuário no Auth, promova-o:
insert into public.user_roles(user_id, role) select id, 'admin' from auth.users where email = 'nunes.bass.forever@gmail.com' on conflict (user_id) do update set role = 'admin';
