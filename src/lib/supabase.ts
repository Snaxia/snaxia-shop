import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ocjtbwjkoofinemuferi.supabase.co';
const supabaseKey = 'sb_publishable_p9WbQ69D_n31ZBwO2_qewQ_7aTZi116';

export const supabase = createClient(supabaseUrl, supabaseKey);
