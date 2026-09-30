# Publicação rápida

## 1. Baixe o projeto
```bash
git clone https://github.com/nunesbassforever-maker/nokes-web-studios.git
cd nokes-web-studios
npm install
```

## 2. Supabase
1. Crie um projeto em https://supabase.com.
2. Abra o SQL Editor e execute `supabase/schema.sql`.
3. Em Authentication > URL Configuration, adicione `http://localhost:3000` e o domínio final.
4. Crie o usuário `nunes.bass.forever@gmail.com` em Authentication > Users.
5. Execute novamente o último `insert` do schema para promover o usuário a admin.

## 3. Ambiente
Copie `.env.example` para `.env.local` e preencha a URL e a chave anon do Supabase. O WhatsApp já está configurado como `5527989020157`.

## 4. Rodar e publicar
```bash
npm run type-check
npm run build
npm start
```
No Vercel, importe este repositório e cadastre as mesmas variáveis em Settings > Environment Variables. Não publique `.env.local`.

## WhatsApp
O link usa `https://wa.me/5527989020157`, correspondente a **55 27 98902-0157**.
