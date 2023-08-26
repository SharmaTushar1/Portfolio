type Project = {
  title: string,
  detailedDescription: string,
  stack: Skill[],
  deploymentLink?: string,
  screenshots?: string[],
  dateAdded: string,

}

type ProjectThumbnail = {
  image: string,
  title: string,
  briefDescription: string,
}