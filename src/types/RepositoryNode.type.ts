import {LanguageNode} from './Language.type'

type Total = {
  totalCount: number
}

export type RepositoryNode = {
  id: string,
  name: string,
  description: string,
  url: string,
  languages: LanguageNode,
  stargazers: Total,
  forks: Total,
  isFork: boolean
}

export type Repositories = {
  nodes: Array<RepositoryNode>
}
export type RepositoriesType = {
  repositories: Repositories
}