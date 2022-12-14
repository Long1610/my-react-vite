import styled from 'styled-components'
import { breakpoint, space } from 'styles/theme'
import { useProjects } from './hooks/use-project'
import ProjectCard from './components/project-card'
import { Box } from '@mui/system'
import ProjectList from './components/project-list'
import { useSetRecoilState } from 'recoil'
import { projectAtom } from 'atoms/project'
import { useEffect } from 'react'

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

const ProjectPage = () => {
  const { data, isLoading, isError, error } = useProjects()
  const setProject = useSetRecoilState(projectAtom)

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
            <ProjectCard project={project} />
          </li>
        ))}
      </List>
      <ProjectList />
    </Box>
  )
}

export default ProjectPage
