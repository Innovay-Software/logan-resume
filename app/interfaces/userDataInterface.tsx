interface portfolioContentInterface {
  photos: {
    original: string,
    thumbnail: string,
    description: string,
  }[],
}

export interface UserDataInterface {
  resumeData: {
    resumeSideBar: {
      name: string;
      metadata: { key: string; value: string; sensitive?: boolean }[];
    },
    resumeTopBar: {
      titles: { text: string; icon: string }[];
    },
    resumePanel: {
      technicalSkills: {
        title: string;
        itemList: string;
        items: { text: string; level: number }[];
      }[];
      workHistory: {
        title: string;
        company: string;
        duration: string;
        descriptions: string[];
      }[];
      education: {
        school: string;
        duration: string;
        degree: string;
      }[];
    },
  },
  portfolioData: {
    [key: string]: portfolioContentInterface,
  }
}
