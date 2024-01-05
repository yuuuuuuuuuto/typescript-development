export {};

// Record<K, T>

type Prefectures = "Tokyo" | "Chiba" | "Tottori";

type COvid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, COvid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 249 },
  Tottori: { kanji_name: "鳥取", confirmed_cases: 2 },
};
