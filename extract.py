import fitz
doc = fitz.open('public/Snaxia shop menu card.pdf')
text = ''.join([p.get_text() for p in doc])
print('Length:', len(text))
with open('menu_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)
