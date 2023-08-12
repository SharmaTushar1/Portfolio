type Project = {
  title: string,
  detailedDescription: string,
  stack: string[],
  deploymentLink?: string,
  Screenshots?: string[],
  dateAdded: string,

}

type ProjectThumbnail = {
  image: string,
  title: string,
  briefDescription: string,
}