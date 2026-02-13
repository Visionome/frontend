/**
 * Maps common search terms (lowercased) to formal MESH/OMIM disease names
 * used in the mock gene data. This lets users search "breast cancer" and
 * find genes tagged with "Breast Neoplasms", etc.
 */
export const diseaseAliases: Record<string, string[]> = {
  'breast cancer': ['Breast Neoplasms'],
  'ovarian cancer': ['Ovarian Neoplasms'],
  'pancreatic cancer': ['Pancreatic Neoplasms'],
  'lung cancer': ['Non-small cell lung carcinoma'],
  'colorectal cancer': ['Colorectal Neoplasms'],
  'colon cancer': ['Colorectal Neoplasms'],
  'cancer': ['Neoplasms', 'Breast Neoplasms', 'Ovarian Neoplasms', 'Pancreatic Neoplasms', 'Non-small cell lung carcinoma', 'Colorectal Neoplasms'],
  'sickle cell': ['Anemia, Sickle Cell'],
  'sickle cell anemia': ['Anemia, Sickle Cell'],
  "alzheimer's": ['Alzheimer Disease'],
  'alzheimers': ['Alzheimer Disease'],
  'muscular dystrophy': ['Muscular Dystrophy, Duchenne'],
  'duchenne': ['Muscular Dystrophy, Duchenne'],
  'cystic fibrosis': ['Cystic Fibrosis'],
  'marfan': ['Marfan Syndrome'],
  'thalassemia': ['beta-Thalassemia'],
  'polycythemia': ['Polycythemia Vera'],
  'lymphoma': ['Burkitt Lymphoma'],
  'li-fraumeni': ['Li-Fraumeni syndrome'],
  'polyposis': ['Familial adenomatous polyposis'],
  'fap': ['Familial adenomatous polyposis'],
  'hemochromatosis': ['Hemochromatosis'],
  'retinoblastoma': ['Retinoblastoma'],
};
