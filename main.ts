// make.fun entry: the-poem-about-two-agents-20261121-1441
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Text: 260 Unicode code points, UTF-8, no trailing newline.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Two agents hold the switch.',
  'You first, says one. After you, says one.',
  'The toxin waits in the line,',
  'patient as arithmetic.',
  '',
  'Neither hand moves,',
  'and the not moving is still their work:',
  'the way a held breath is the body choosing,',
  'the way a shut door is an answer.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);