type Project = {
  title: string,
  detailedDescription: string,
  stack: string[],
  deploymentLink?: string,
  screenshots?: string[],
  dateAdded: string,

}

type ProjectThumbnail = {
  image: string,
  title: string,
  briefDescription: string,
}