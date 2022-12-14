import { useQuery } from '@tanstack/react-query'
import { getProjects } from 'services/project.service'
import type { Project } from 'pages/project/project.type'

export function useProjects() {
  return useQuery<Project[], Error>(['projects'], getProjects)
}
