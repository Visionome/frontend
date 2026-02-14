/**
 * Maps common search terms (lowercased) to formal disease names used in gene
 * data. Includes both MeSH-style and ClinVar-style names so aliases resolve
 * regardless of which naming convention the underlying dataset uses.
 */
export const diseaseAliases: Record<string, string[]> = {
  'breast cancer': ['Breast Neoplasms', 'Breast cancer', 'Familial breast cancer'],
  'ovarian cancer': ['Ovarian Neoplasms', 'Ovarian cancer', 'Familial ovarian cancer'],
  'pancreatic cancer': ['Pancreatic Neoplasms', 'Pancreatic cancer'],
  'lung cancer': ['Non-small cell lung carcinoma', 'Lung cancer'],
  'colorectal cancer': ['Colorectal Neoplasms', 'Colorectal cancer'],
  'colon cancer': ['Colorectal Neoplasms', 'Colorectal cancer', 'Colon cancer'],
  'cancer': ['Neoplasms', 'cancer', 'carcinoma'],
  'sickle cell': ['Anemia, Sickle Cell', 'Sickle cell anemia', 'Sickle cell disease'],
  'sickle cell anemia': ['Anemia, Sickle Cell', 'Sickle cell anemia', 'Sickle cell disease'],
  "alzheimer's": ['Alzheimer Disease', "Alzheimer's disease"],
  'alzheimers': ['Alzheimer Disease', "Alzheimer's disease"],
  'muscular dystrophy': ['Muscular Dystrophy, Duchenne', 'Duchenne muscular dystrophy'],
  'duchenne': ['Muscular Dystrophy, Duchenne', 'Duchenne muscular dystrophy'],
  'cystic fibrosis': ['Cystic Fibrosis', 'Cystic fibrosis'],
  'marfan': ['Marfan Syndrome', 'Marfan syndrome'],
  'thalassemia': ['beta-Thalassemia', 'Thalassemia'],
  'polycythemia': ['Polycythemia Vera', 'Polycythemia vera'],
  'lymphoma': ['Burkitt Lymphoma', 'Lymphoma'],
  'li-fraumeni': ['Li-Fraumeni syndrome'],
  'polyposis': ['Familial adenomatous polyposis'],
  'fap': ['Familial adenomatous polyposis'],
  'hemochromatosis': ['Hemochromatosis', 'Hereditary hemochromatosis'],
  'retinoblastoma': ['Retinoblastoma'],
};
