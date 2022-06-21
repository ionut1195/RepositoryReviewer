import {LanguageNode} from './Language.type'

export type RepositoryNode = {
  id: string,
  name: string,
  url: string,
  languages: LanguageNode
}

export type Repositories = {
  nodes: Array<RepositoryNode>
}
export type RepositoriesType = {
  repositories: Repositories
}