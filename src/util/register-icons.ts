import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckSquare,
  faCoffee,
  faTshirt,
  faUtensils,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

const icons = [faCheckSquare, faCoffee, faTshirt, faUtensils, faTrash]

library.add(...icons)
