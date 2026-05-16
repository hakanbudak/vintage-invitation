export const invitation = {
  couple: {
    bride: "Ezgi",
    groom: "Esat",
    combined: "Ezgi & Esat",
    monogram: "E & E",
  },
  families: [
    {
      side: "Ezgi",
      parents: "Hafize & Hakan",
    },
    {
      side: "Esat",
      parents: "Sadiye & İbrahim",
    },
  ],
  events: {
    henna: {
      label: "Kına",
      date: "11.06.2026",
      day: "Perşembe",
    },
    wedding: {
      label: "Düğün",
      date: "13.06.2026",
      day: "Cuma",
    },
  },
  // Used by countdown — June 13, 2026 at 20:00 local time
  weddingDateISO: "2026-06-13T20:00:00+03:00",
  messages: {
    heroHint: "Sizi özel günümüze davet ediyoruz",
    openEnvelope: "Zarfı açmak için dokunun",
    invitation:
      "Bu özel günümüzde sizleri de aramızda görmekten mutluluk duyarız",
    closing: "Sizinle birlikte bu günü paylaşmayı sabırsızlıkla bekliyoruz",
  },
  venue: {
    name: "Hot Salon Davet",
    addressLine1: "Kocatepe Şemsi Paşa Caddesi No: 25",
    addressLine2: "Bayrampaşa / İstanbul",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hot+Salon+Davet+Bayrampa%C5%9Fa+%C4%B0stanbul",
    // ICS metadata
    calendar: {
      title: "Ezgi & Esat Düğün",
      details: "Ezgi & Esat'ın düğün töreni",
      location:
        "Hot Salon Davet, Kocatepe Şemsi Paşa Caddesi No:25, Bayrampaşa / İstanbul",
      startUTC: "20260613T170000Z", // 20:00 Istanbul
      endUTC: "20260613T220000Z",
    },
  },
};

export type Invitation = typeof invitation;
