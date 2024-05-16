import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export default openai;