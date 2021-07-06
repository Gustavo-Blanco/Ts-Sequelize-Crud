import {list,create,update, destroy} from '../controller/crud';
import {Router} from 'express';

const router = Router();

router.route('/').get(list);
router.route('/create').post(create);
router.route('/update/:id').put(update);
router.route('/delete/:id').delete(destroy);

export default router;