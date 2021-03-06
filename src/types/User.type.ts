import {Repositories} from './RepositoryNode.type'
type Followers = {
  totalCount: number
}

export type User = {
  id: string,
  login: string,
  bio: string,
  followers: Followers,
  following: Followers,
  avatarUrl: string,
  repositories: Repositories
}