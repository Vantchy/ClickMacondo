"""Fix relationshipEffects braces in chapters-data files."""
import re

# All relationship effects to add: (file, choice_id, character, delta)
EDITS = [
    # === 费尔南达·德尔·卡皮奥 (ch9) ===
    ('chapters-data-3.js', 'ch9_r1_a', '费尔南达·德尔·卡皮奥', +15),
    ('chapters-data-3.js', 'ch9_r1_b', '费尔南达·德尔·卡皮奥', -10),
    ('chapters-data-3.js', 'ch9_r1_c', '费尔南达·德尔·卡皮奥', +5),
    ('chapters-data-3.js', 'ch9_r3_a', '费尔南达·德尔·卡皮奥', -10),
    ('chapters-data-3.js', 'ch9_r3_b', '费尔南达·德尔·卡皮奥', +15),
    ('chapters-data-3.js', 'ch9_r3_c', '费尔南达·德尔·卡皮奥', -5),
    ('chapters-data-3.js', 'ch9_r4_a', '费尔南达·德尔·卡皮奥', +15),
    ('chapters-data-3.js', 'ch9_r4_b', '费尔南达·德尔·卡皮奥', -10),
    ('chapters-data-3.js', 'ch9_r4_c', '费尔南达·德尔·卡皮奥', +5),
    # === 佩特拉·科特斯 (ch11) ===
    ('chapters-data-4.js', 'ch11_r1_a', '佩特拉·科特斯', +10),
    ('chapters-data-4.js', 'ch11_r1_b', '佩特拉·科特斯', +5),
    ('chapters-data-4.js', 'ch11_r1_c', '佩特拉·科特斯', -10),
    ('chapters-data-4.js', 'ch11_r3_a', '佩特拉·科特斯', +15),
    ('chapters-data-4.js', 'ch11_r3_b', '佩特拉·科特斯', -10),
    ('chapters-data-4.js', 'ch11_r3_c', '佩特拉·科特斯', +10),
    ('chapters-data-4.js', 'ch11_r4_a', '佩特拉·科特斯', -5),
    ('chapters-data-4.js', 'ch11_r4_b', '佩特拉·科特斯', +10),
    ('chapters-data-4.js', 'ch11_r4_c', '佩特拉·科特斯', +15),
    # === 梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）(ch13) ===
    ('chapters-data-5.js', 'ch13_r1_a', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +15),
    ('chapters-data-5.js', 'ch13_r1_b', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +10),
    ('chapters-data-5.js', 'ch13_r1_c', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', -10),
    ('chapters-data-5.js', 'ch13_r2_a', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +15),
    ('chapters-data-5.js', 'ch13_r2_b', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +10),
    ('chapters-data-5.js', 'ch13_r2_c', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', -5),
    ('chapters-data-5.js', 'ch13_r3_a', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +15),
    ('chapters-data-5.js', 'ch13_r3_b', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +5),
    ('chapters-data-5.js', 'ch13_r3_c', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +10),
    ('chapters-data-5.js', 'ch13_r4_a', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', +15),
    ('chapters-data-5.js', 'ch13_r4_b', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', -10),
    ('chapters-data-5.js', 'ch13_r4_c', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', -5),
    # === 阿玛兰妲·乌尔苏拉 (ch16) ===
    ('chapters-data-5.js', 'ch16_r1_a', '阿玛兰妲·乌尔苏拉', +15),
    ('chapters-data-5.js', 'ch16_r1_b', '阿玛兰妲·乌尔苏拉', -10),
    ('chapters-data-5.js', 'ch16_r1_c', '阿玛兰妲·乌尔苏拉', +10),
    ('chapters-data-5.js', 'ch16_r2_a', '阿玛兰妲·乌尔苏拉', +15),
    ('chapters-data-5.js', 'ch16_r2_b', '阿玛兰妲·乌尔苏拉', +10),
    ('chapters-data-5.js', 'ch16_r2_c', '阿玛兰妲·乌尔苏拉', -5),
    ('chapters-data-5.js', 'ch16_r3_a', '阿玛兰妲·乌尔苏拉', +15),
    ('chapters-data-5.js', 'ch16_r3_b', '阿玛兰妲·乌尔苏拉', +10),
    ('chapters-data-5.js', 'ch16_r3_c', '阿玛兰妲·乌尔苏拉', +10),
    ('chapters-data-5.js', 'ch16_r4_a', '阿玛兰妲·乌尔苏拉', +15),
    ('chapters-data-5.js', 'ch16_r4_b', '阿玛兰妲·乌尔苏拉', -5),
    ('chapters-data-5.js', 'ch16_r4_c', '阿玛兰妲·乌尔苏拉', -10),
]

BASE_DIR = 'c:/Users/Vantc/Desktop/项目笔记/ClickMacondo/frontend/assets/data'

# Group edits by file
by_file = {}
for (fname, cid, char, delta) in EDITS:
    by_file.setdefault(fname, []).append((cid, char, delta))

for fname, file_edits in by_file.items():
    path = f'{BASE_DIR}/{fname}'
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changes = 0
    for (cid, char, delta) in file_edits:
        sign = '+' if delta >= 0 else ''
        rel_effect = f", relationshipEffects: {{ '{char}': {sign}{delta} }}"

        for i, line in enumerate(lines):
            if f"id:'{cid}'" not in line:
                continue

            # Check if line already has relationshipEffects
            if 'relationshipEffects' in line:
                print(f"  SKIP {fname}:{i+1} {cid} — already has relationshipEffects")
                break

            # Determine if this is last in array (no trailing comma before newline/settlement)
            # We find "bond:N } }" (last) or "bond:N } }," (non-last)
            # Pattern: the effects object ends with "bond:N }"
            # For non-last: "bond:N } }," → need "bond:N } } },"
            # For last: "bond:N } }" → need "bond:N } } }"

            # Find the bond value and closing braces
            m = re.search(r'(bond:\s*-?\d+)(\s*\})(\s*\})(\s*),?(\s*)$', line)
            if not m:
                print(f"  WARN {fname}:{i+1} {cid} — cannot parse bond pattern")
                break

            before = m.group(1)    # "bond: 1"
            sp1 = m.group(2)       # " }" (effects close)
            sp2 = m.group(3)       # " }" (choice close)
            sp3 = m.group(4)       # spaces
            comma = ',' if ',' in (m.group(5) or '') else ''
            rest = m.group(5) or ''

            # New line: bond, relationshipEffects } } },
            new_ending = f'{before}{rel_effect}{sp1}{sp2}{sp3}{comma}{rest}'
            new_line = line[:m.start()] + new_ending

            lines[i] = new_line
            changes += 1
            print(f"  OK   {fname}:{i+1} {cid} ({sign}{delta})")
            break
        else:
            print(f"  MISS {fname} {cid} — choice ID not found in any line")

    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'{fname}: {changes} changes written')

print('\nDone.')
