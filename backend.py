import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("cred.json")
firebase_admin.initialize_app(cred)

db = firebase_admin.firestore.client()

users = db.collection('usuários')
comp = db.collection('compras')
docs = comp.stream()

us = []
t = []
for doc in docs:
    if doc.to_dict()['usuario'] not in us:
        us.append(doc.to_dict()['usuario'])
    if doc.to_dict()['cancelamento'] == 0:
        t.append([us.index(doc.to_dict()['usuario'])+1, doc.to_dict()['categoria']])

w = {}
wc = {}
r = {}
rec = {}

for x in range(len(t)):
  try:
    w[t[x][0]].append(t[x][1])
  except:
    w[t[x][0]] = [t[x][1]]

j = len(w)

for x in range(j):
  x += 1
  for y in range(j):
    y += 1
    try:
      wc[x] += w[y].count(x)
    except:
      wc[x] = w[y].count(x)

for x in range(j):
  x += 1
  for y in range(j-x):
    y += 1
    dif = list(set(w[x]) - (set(w[x]) - set(w[x+y])))
    ld = len(dif)
    if ld > 2:
      for a in range(ld):
        for b in range(ld-a-1):
          b += 1
          try:
            r['{},{}'.format(dif[a], dif[a+b])] += 1/(wc[dif[a]]+wc[dif[a+b]])
          except:
            r['{},{}'.format(dif[a], dif[a+b])] = 1/(wc[dif[a]]+wc[dif[a+b]])
    elif ld > 1:
      try:
        r['{},{}'.format(dif[0], dif[1])] += 1/(wc[dif[0]]+wc[dif[1]])
      except:
        r['{},{}'.format(dif[0], dif[1])] = 1/(wc[dif[0]]+wc[dif[1]])

for x in range(len(w)):
  x += 1
  for y in range(len(r)):
    u = [int(list(r)[y][0]), int(list(r)[y][2])]
    we = list(set(u) - set(w[x]))
    if list(r)[y][0] not in str(w[x]) and list(r)[y][2] in str(w[x]):
      try:
        if we[0] not in rec[x]:
          rec[x].append(we[0])
      except:
        rec[x] = [we[0]]
    elif list(r)[y][0] in str(w[x]) and list(r)[y][2] not in str(w[x]):
      try:
        if we[0] not in rec[x]:
          rec[x].append(we[0])
      except:
        rec[x] = [we[0]]

print(rec)
for y in range(len(rec)):
    y += 1
    users.document(us[list(rec)[y-1]-1]).set({
        'rec': rec[y]
    })

