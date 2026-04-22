# Ezgi & Esat — Dijital Davet

Lüks, sinematik, mobil öncelikli bir dijital düğün davetiyesi.

## Çalıştırma

```bash
npm install
npm run dev
```

http://localhost:3000 üzerinde açılır.

## İçerik düzenleme

Tüm metinler, tarihler ve mekân bilgileri tek bir yerde:

```
data/invitation.ts
```

- `couple` — gelin/damat isimleri ve monogram
- `families` — aile bilgileri
- `events` — kına ve düğün tarihleri
- `weddingDateISO` — geri sayım için hedef tarih
- `venue` — adres, Google Maps linki, takvim (ICS) bilgileri
- `messages` — karşılama ve davet metinleri

## Bölümler

1. **IntroEnvelope** — zarf açma animasyonu
2. **InvitationCard** — dantel çerçeveli davet kartı
3. **FamilySection** — aile isimleri ve davet mesajı
4. **VenueSection** — mekân + "Konumu Aç", "Takvime Ekle", "Katılım Bildir"
5. **CountdownSection** — 13 Haziran 2026'ya canlı geri sayım

## Teknoloji

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- next/font (Cormorant Garamond + Pinyon Script + Inter)
