import worker from './index';
import { withStatusSnapshot } from './status-snapshot';

export default withStatusSnapshot(worker, {
  name: 'EdgarFlash',
  store: env => env.EF_STATE,
  maxAgeMs: 2 * 60 * 60 * 1000,
});
