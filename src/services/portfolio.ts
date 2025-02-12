import { supabase } from "@/lib/supabase";

export const getPortfolioData = async () => {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
  return data;
};
