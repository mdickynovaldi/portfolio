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

export const getPortfolioDetail = async (slug: string) => {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    throw new Error(`Failed to fetch portfolio detail: ${error.message}`);
  }

  return [data];
};
