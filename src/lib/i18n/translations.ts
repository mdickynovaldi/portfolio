// Definisi tipe untuk struktur translations
export interface Translations {
  en: TranslationStructure;
  id: TranslationStructure;
}

export interface TranslationStructure {
  welcome: string;
  about: {
    title: string;
    description: string;
  };
  education: {
    title: string;
    um: Education;
    binus: Education;
  };
  experience: {
    title: string;
    subtitle: string;
    description: string;
    lidm: string;
    lidm2: string;
    freelance: string;
  };
  skills: string;
  portfolio: {
    title: string;
    description: string;
    button: string;
  };
  contact: {
    title: string;
    description: string;
    subtitle: string;
    button: string;
  };
}

interface Education {
  title: string;
  degree: string;
  major: string;
  year: string;
}

export const translations: Translations = {
  en: {
    welcome: "Welcome",
    about: {
      title: "About",
      description:
        "Hi! I'm Moch Dicky Novaldi, usually called Aldi 🚀 - a Fullstack Developer from Malang, Indonesia 🌴. With 3+ years of experience in software development, I specialize in building end-to-end web & mobile applications. Proficient in MERN Stack (Prisma, NextJs, ReactJs, Supabase), Flutter for mobile development, and Unity for game development. Always passionate about creating impactful and scalable technology solutions!",
    },
    education: {
      title: "Education History",
      um: {
        title: "University of Malang",
        degree: "Diploma Degree",
        major: "Game Animation",
        year: "2018 - 2021",
      },
      binus: {
        title: "Binus University",
        degree: "Bachelor Degree",
        major: "Computer Science",
        year: "2024 - 2025",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Work Experience",
      description:
        "I've worked with various companies and projects, from startups to large corporations. Here are some of my experiences:",
      lidm: "Gold Medal International Science and Invention Fair (ISIF)-Indonesian Young Scientist Association (2020). As a developer on the team, I work on developing virtual biology laboratory applications, using Unity.",
      lidm2:
        "Bronze Medal Student Digital Innovation competition (Digital Material Innovation Branch)–Ministry Of Research And Technology Republic Indonesia (2021). As a developer on the team, I work on website development projects using HTML, CSS, Bootstrap, and PHP Laravel for the back end.",
      freelance:
        "I decided to learn programming on my own. and trying to be a freelance developer.",
    },
    skills: "Skills",
    portfolio: {
      title: "My Portfolio",
      description: "Here are some of my projects",
      button: "View All Projects",
    },
    contact: {
      title: "Contact",
      description: "Get in touch with me",
      subtitle: "Get in touch with me",
      button: "Contact Me",
    },
  },
  id: {
    welcome: "Selamat Datang",
    about: {
      title: "Tentang",
      description:
        "Hai! Saya Moch Dicky Novaldi, biasa dipanggil Aldi 🚀 - seorang Fullstack Developer dari Malang, Indonesia 🌴. Dengan pengalaman lebih dari 3 tahun di bidang pengembangan perangkat lunak, saya mengkhususkan diri dalam membangun aplikasi web & mobile end-to-end. Mahir dalam MERN Stack (Prisma, NextJs, ReactJs, Supabase), Flutter untuk pengembangan mobile, dan Unity untuk pengembangan game. Selalu bersemangat dalam menciptakan solusi teknologi yang berdampak dan terukur!  ",
    },
    education: {
      title: "Riwayat Pendidikan",
      um: {
        title: "Universitas Malang",
        degree: "D3",
        major: "Game Animasi",
        year: "2018 - 2021",
      },
      binus: {
        title: "Binus University",
        degree: "S1",
        major: "Ilmu Komputer",
        year: "2024 - 2025",
      },
    },
    experience: {
      title: "Pengalaman",
      subtitle: "Pengalaman Kerja",
      description:
        "Saya telah bekerja dengan berbagai perusahaan dan proyek, dari startup ke perusahaan besar. Berikut adalah beberapa pengalaman saya:",
      lidm: "Juara Emas Lomba Internasional Ilmiah dan Inovasi (ISIF)-Asosiasi Muda Ilmu Pengetahuan Indonesia (2020). Sebagai developer tim, saya bekerja pada pengembangan aplikasi laboratorium virtual biologi menggunakan Unity.",
      lidm2:
        "Juara Perak Lomba Kompetisi Inovasi Digital (Cabang Inovasi Digital Material)–Kementerian Riset dan Teknologi Republik Indonesia (2021). Sebagai developer tim, saya bekerja pada pengembangan proyek website menggunakan HTML, CSS, Bootstrap, dan PHP Laravel untuk backend.",
      freelance:
        "Saya memutuskan untuk belajar pemrograman secara mandiri dan mencoba menjadi seorang developer freelance.",
    },
    skills: "Keahlian",
    portfolio: {
      title: "Portofolio",
      description: "Berikut adalah beberapa proyek saya",
      button: "Lihat Semua Proyek",
    },
    contact: {
      title: "Kontak",
      description: "Hubungi saya",
      subtitle: "Hover sini agar kontak saya muncul",
      button: "Klik untuk menghubungi saya",
    },
  },
};

export type Language = "en" | "id";

// Membuat tipe TranslationKey yang lebih aman menggunakan dot notation
type Join<K extends string, P extends string> = `${K}${P extends ""
  ? ""
  : "."}${P}`;

type RecursiveKeyOf<T> = T extends object
  ? {
      [P in keyof T]: P extends string
        ? T[P] extends string
          ? P
          : Join<P, RecursiveKeyOf<T[P]>>
        : never;
    }[keyof T]
  : "";

export type TranslationKey = RecursiveKeyOf<TranslationStructure>;
