export interface Keyword {
  keyword: string;
  category: string;
  volume: number; // est. monthly searches in the US
  difficulty: "Low" | "Medium" | "High" | "Very High";
  intent: "Informational" | "Navigational" | "Transactional";
  note?: string;
}

export const keywords: Keyword[] = [
  // Crisis & Suicide
  { keyword: "suicide hotline", category: "Crisis & Suicide", volume: 1000000, difficulty: "High", intent: "Navigational", note: "One of the most searched help terms in the US; spikes during crisis events" },
  { keyword: "988", category: "Crisis & Suicide", volume: 550000, difficulty: "Medium", intent: "Navigational", note: "Surged since the July 2022 national rollout" },
  { keyword: "crisis hotline", category: "Crisis & Suicide", volume: 165000, difficulty: "Medium", intent: "Navigational" },
  { keyword: "suicide prevention", category: "Crisis & Suicide", volume: 135000, difficulty: "Medium", intent: "Informational" },
  { keyword: "988 suicide and crisis lifeline", category: "Crisis & Suicide", volume: 90500, difficulty: "Low", intent: "Navigational" },
  { keyword: "crisis text line", category: "Crisis & Suicide", volume: 60500, difficulty: "Low", intent: "Navigational" },
  { keyword: "suicide prevention hotline", category: "Crisis & Suicide", volume: 60500, difficulty: "Medium", intent: "Navigational" },
  { keyword: "mental health hotline", category: "Crisis & Suicide", volume: 49500, difficulty: "Medium", intent: "Navigational" },
  { keyword: "depression hotline", category: "Crisis & Suicide", volume: 33100, difficulty: "Low", intent: "Navigational" },
  { keyword: "anxiety hotline", category: "Crisis & Suicide", volume: 22200, difficulty: "Low", intent: "Navigational" },
  { keyword: "teen suicide hotline", category: "Crisis & Suicide", volume: 6600, difficulty: "Low", intent: "Navigational" },
  { keyword: "suicide hotline number", category: "Crisis & Suicide", volume: 5400, difficulty: "Low", intent: "Navigational" },

  // Domestic Violence & Abuse
  { keyword: "domestic violence hotline", category: "Domestic Violence & Abuse", volume: 74000, difficulty: "Medium", intent: "Navigational", note: "Google shows the hotline in a special top-of-results box for related searches" },
  { keyword: "national domestic violence hotline", category: "Domestic Violence & Abuse", volume: 40500, difficulty: "Medium", intent: "Navigational" },
  { keyword: "domestic violence help", category: "Domestic Violence & Abuse", volume: 22200, difficulty: "Medium", intent: "Informational" },
  { keyword: "domestic violence shelter", category: "Domestic Violence & Abuse", volume: 14800, difficulty: "Medium", intent: "Transactional" },
  { keyword: "sexual assault hotline", category: "Domestic Violence & Abuse", volume: 9900, difficulty: "Low", intent: "Navigational" },
  { keyword: "rape hotline", category: "Domestic Violence & Abuse", volume: 8100, difficulty: "Low", intent: "Navigational" },
  { keyword: "child abuse hotline", category: "Domestic Violence & Abuse", volume: 6600, difficulty: "Low", intent: "Navigational" },
  { keyword: "text start to 88788", category: "Domestic Violence & Abuse", volume: 2900, difficulty: "Low", intent: "Navigational", note: "People type the exact text command when they need help" },

  // Addiction & Recovery
  { keyword: "alcoholics anonymous", category: "Addiction & Recovery", volume: 368000, difficulty: "Medium", intent: "Navigational" },
  { keyword: "aa meetings", category: "Addiction & Recovery", volume: 246000, difficulty: "Medium", intent: "Transactional" },
  { keyword: "rehab", category: "Addiction & Recovery", volume: 246000, difficulty: "High", intent: "Transactional" },
  { keyword: "narcotics anonymous", category: "Addiction & Recovery", volume: 90500, difficulty: "Medium", intent: "Navigational" },
  { keyword: "al-anon", category: "Addiction & Recovery", volume: 60500, difficulty: "Low", intent: "Navigational" },
  { keyword: "addiction hotline", category: "Addiction & Recovery", volume: 14800, difficulty: "Low", intent: "Navigational" },
  { keyword: "drug addiction hotline", category: "Addiction & Recovery", volume: 12100, difficulty: "Low", intent: "Navigational" },
  { keyword: "drug rehab near me", category: "Addiction & Recovery", volume: 9900, difficulty: "High", intent: "Transactional" },

  // Veterans & Military
  { keyword: "va benefits", category: "Veterans & Military", volume: 90500, difficulty: "High", intent: "Informational" },
  { keyword: "veterans crisis line", category: "Veterans & Military", volume: 18100, difficulty: "Low", intent: "Navigational" },
  { keyword: "veterans suicide hotline", category: "Veterans & Military", volume: 9900, difficulty: "Low", intent: "Navigational" },
  { keyword: "va disability claim", category: "Veterans & Military", volume: 8100, difficulty: "High", intent: "Informational" },

  // LGBTQ+
  { keyword: "the trevor project", category: "LGBTQ+", volume: 110000, difficulty: "Medium", intent: "Navigational", note: "Brand searches are very high among LGBTQ+ youth" },
  { keyword: "lgbtq resources", category: "LGBTQ+", volume: 8100, difficulty: "Low", intent: "Informational" },
  { keyword: "trans lifeline", category: "LGBTQ+", volume: 4400, difficulty: "Low", intent: "Navigational" },
  { keyword: "lgbt hotline", category: "LGBTQ+", volume: 2900, difficulty: "Low", intent: "Navigational" },
  { keyword: "lgbtq therapy", category: "LGBTQ+", volume: 2400, difficulty: "Medium", intent: "Transactional" },

  // Health, Safety & Daily Needs
  { keyword: "medicare", category: "Health & Safety", volume: 1000000, difficulty: "High", intent: "Informational" },
  { keyword: "food bank near me", category: "Health & Safety", volume: 1000000, difficulty: "Medium", intent: "Transactional", note: "Huge local-intent volume — a food-hunger directory page can capture this" },
  { keyword: "cdc", category: "Health & Safety", volume: 823000, difficulty: "High", intent: "Navigational" },
  { keyword: "snap benefits", category: "Health & Safety", volume: 550000, difficulty: "Medium", intent: "Informational" },
  { keyword: "poison control", category: "Health & Safety", volume: 301000, difficulty: "Medium", intent: "Navigational", note: "Very high-intent — poison control number should be instantly visible" },
  { keyword: "fema", category: "Health & Safety", volume: 301000, difficulty: "Medium", intent: "Navigational" },
  { keyword: "identity theft", category: "Health & Safety", volume: 301000, difficulty: "High", intent: "Informational" },
  { keyword: "irs phone number", category: "Health & Safety", volume: 301000, difficulty: "Medium", intent: "Navigational" },
  { keyword: "disaster assistance", category: "Health & Safety", volume: 33100, difficulty: "Medium", intent: "Transactional" },
  { keyword: "poison control number", category: "Health & Safety", volume: 22200, difficulty: "Low", intent: "Navigational" },
  { keyword: "human trafficking hotline", category: "Health & Safety", volume: 22200, difficulty: "Low", intent: "Navigational" },
  { keyword: "free legal aid", category: "Health & Safety", volume: 40500, difficulty: "Medium", intent: "Transactional" },
  { keyword: "elder abuse hotline", category: "Health & Safety", volume: 3600, difficulty: "Low", intent: "Navigational" },
  { keyword: "missing children", category: "Health & Safety", volume: 12100, difficulty: "Medium", intent: "Informational" },
];

export const keywordTotalVolume = keywords.reduce((sum, k) => sum + k.volume, 0);

export const formatVolume = (v: number) => {
  if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
  if (v >= 1000) return `${Math.round(v / 1000)}K`;
  return `${v}`;
};
