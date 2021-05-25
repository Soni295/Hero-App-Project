import { useContext, memo, useCallback } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

import { MyTeamContext } from '../../context/MyTeamContext'

import { ModalAlert } from '../ModalAlert/ModalAlert'
import { useModal } from '../../hooks/useModal'

export const Buttons = memo(({handleVisible, id, alignment, hero}) => {

  const {modal, setModal} = useModal('Add problem', 'you can have only 3 heros per alignment')
  const {myTeam, dispatch} = useContext(MyTeamContext)

  const existIntheTeam = myTeam.heros.some(hero=> hero.id === id)

  const handleAdd =  useCallback(() => {
    const countAlignment =  myTeam.heros.reduce((count, myHero) =>
      myHero.alignment === alignment
        ? count + 1 : count , 0
    )
    if(countAlignment < 3) dispatch.addHero(hero)
    else setModal.show()
  }, [hero, myTeam.heros])

  const handleRemove = () => dispatch.removeHero(id)

  return(
    <>
      <ModalAlert modal={modal} setModal={setModal}/>
      <ButtonGroup size="lg" className="mb-2  align-items-sm-center ">
        {existIntheTeam ?
          <Button variant="danger" onClick={handleRemove}>
            Delete
          </Button> :
          <Button onClick={handleAdd}>Add</Button>
        }
        <Button
          variant="dark"
          onClick={handleVisible}
        >
          Details
        </Button>
      </ButtonGroup>
    </>
  )
})
