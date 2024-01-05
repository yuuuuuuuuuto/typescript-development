export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// ↓DetailedProfileから"name" | "weightだけ選択。
type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
// ↓DetailedProfileから"height"を除外。
type SmallProfile = Omit<DetailedProfile, "height">;
