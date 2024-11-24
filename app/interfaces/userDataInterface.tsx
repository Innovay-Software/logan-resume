interface portfolioContentInterface {
  title: string
  subtitle: string
  photoVertical: boolean
  photos: {
    original: string
    thumbnail: string
    description: string
  }[]
}

export interface UserDataInterface {
  resumeData: {
    resumeSideBar: {
      name: string
      summary: string
      portfolios: string
      years: string
      educations: string
      metadata: {
        key: string
        value: string
        url?: string
        sensitive?: boolean
      }[]
    }
    resumeTopBar: {
      titles: { text: string; icon: string }[]
    }
    resumePanel: {
      qualifications: string[]
      technicalSkills: {
        title: string
        items: { text: string; level: number }[]
      }[]
      workHistory: {
        title: string
        company: string
        duration: string
        descriptions: string[]
      }[]
      education: {
        school: string
        duration: string
        degree: string
      }[]
    }
  }
  portfolioData: portfolioContentInterface[]
}
