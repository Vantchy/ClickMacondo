import re
import base64
import urllib.request
from pathlib import Path

md_path = Path(r"c:\Users\Vantc\Desktop\项目笔记\ClickMacondo\docs\doc-instruction\百年孤独游戏-大章流程图.md")
out_dir = Path(r"c:\Users\Vantc\Desktop\项目笔记\ClickMacondo\docs\doc-instruction\mermaid-images")
out_dir.mkdir(exist_ok=True)

content = md_path.read_text(encoding="utf-8")

# 提取所有 mermaid 代码块
pattern = re.compile(r"```mermaid\n(.*?)\n```", re.DOTALL)
blocks = pattern.findall(content)

print(f"找到 {len(blocks)} 个 Mermaid 图表")

for idx, block in enumerate(blocks, 1):
    diagram = block.strip()
    diagram = diagram.replace("\r\n", "\n")
    encoded = base64.urlsafe_b64encode(diagram.encode("utf-8")).decode("ascii")
    url = f"https://mermaid.ink/img/{encoded}"
    
    print(f"正在生成第 {idx} 张图...")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as response:
            data = response.read()
        out_path = out_dir / f"chart-{idx:02d}.png"
        out_path.write_bytes(data)
        print(f"已保存: {out_path} ({len(data)} bytes)")
    except Exception as e:
        print(f"第 {idx} 张图生成失败: {e}")

print("完成")
