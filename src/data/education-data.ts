import { EducationEntry } from "@/types";
import { useI18n } from "@/lib/i18n/i18n-context";

export const educationData = () => {
  const { t } = useI18n();

  const data: EducationEntry[] = [
    {
      institution: t("education.um.title"),
      degree: t("education.um.degree"),
      year: t("education.um.year"),
      location: "Malang, Indonesia",
      gpa: 3.44,
    },

    {
      institution: t("education.binus.title"),
      degree: t("education.binus.degree"),
      year: t("education.binus.year"),
      location: "Malang, Indonesia",
      gpa: 3.5,
    },
  ];

  return data;
};
