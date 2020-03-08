import InitThree from '@/views/three/initThree'
import WatchKeyframe from '@/views/three/watchKeyframe'
import InitObj from '@/views/three/initObj'

import CameraFollowMouse from '@/views/three/cameraFollowMouse'
import AutoRotateCamera from '@/views/three/autoRotateCamera'
import DragCamera from '@/views/three/dragCamera'
import Gui from '@/views/three/gui'

import ControlObj from '@/views/three/controlObj'
import SimpleGeometry from '@/views/three/simpleGeometry'
import ComplexGeometry from '@/views/three/complexGeometry'
import PlaneGeometry from '@/views/three/planeGeometry'
import PipeGeometry from '@/views/three/pipeGeometry'

export default
[
  {
    path: '/three/initThree',
    name: 'initThree',
    component: InitThree
  },
  {
    path: '/three/watchKeyframe',
    name: 'watchKeyframe',
    component: WatchKeyframe
  },
  {
    path: '/three/gui',
    name: 'gui',
    component: Gui
  },
  {
    path: '/three/initObj',
    name: 'initObj',
    component: InitObj
  },
  {
    path: '/three/cameraFollowMouse',
    name: 'cameraFollowMouse',
    component: CameraFollowMouse
  },
  {
    path: '/three/autoRotateCamera',
    name: 'autoRotateCamera',
    component: AutoRotateCamera
  },
  {
    path: '/three/simpleGeometry',
    name: 'simpleGeometry',
    component: SimpleGeometry
  },
  {
    path: '/three/controlObj',
    name: 'controlObj',
    component: ControlObj
  },
  {
    path: '/three/dragCamera',
    name: 'dragCamera',
    component: DragCamera
  },
  {
    path: '/three/complexGeometry',
    name: 'complexGeometry',
    component: ComplexGeometry
  },
  {
    path: '/three/planeGeometry',
    name: 'planeGeometry',
    component: PlaneGeometry
  },
  {
    path: '/three/pipeGeometry',
    name: 'pipeGeometry',
    component: PipeGeometry
  }
]
