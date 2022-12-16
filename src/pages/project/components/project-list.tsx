import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { projectAtom } from 'atoms/project'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { getProjectDetail, getProjects } from 'services/project.service'
import styled from 'styled-components'
import { breakpoint, space } from 'styles/theme'
import { Project } from '../project.type'
import ProjectCard from './project-card'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};
  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: ${breakpoint('desktop')}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`

const ProjectList = () => {
  const setProject = useSetRecoilState(projectAtom)
  const { data, isLoading, isError, error } = useQuery<Project[], Error>(
    ['projects'],
    getProjects
  )

  const {
    data: detail,
    isLoading: detailLoading,
    refetch: getProjectDetailById
  } = useQuery<Project[], Error>(
    ['projects-detail'],
    (id: any) => getProjectDetail(id),
    { enabled: false }
  )

  useEffect(() => {
    data && setProject(data)
  }, [data])

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    console.error(error)
    return <div>Error: {error.message}</div>
  }

  return (
    <Box>
      <List>
        {data?.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} onClick={getProjectDetailById} />
          </li>
        ))}
      </List>
      <ProjectList />
    </Box>
  )
}

export default ProjectList
