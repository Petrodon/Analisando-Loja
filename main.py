from tkinter import *

janela = Tk()

ac = []

def obg():
    janela.destroy()
    obr = Tk()
    Label(obr, text='Obrigado', font=('Times', 30)).place(x=wid*0.02, y=hei*0.02)

def wdg():
    buy.place_forget()
    espec.place_forget()
    bck.place_forget()
    
    lb1.place(x=wid*0.03, y=h1)
    lb2.place(x=wid*0.12, y=h2)
    bt1.place(x=wid*0.123, y=h3)
    
    lb3.place(x=wid*0.385, y=h1)
    lb4.place(x=wid*0.47, y=h2)
    bt2.place(x=wid*0.473, y=h3)
    
    lb5.place(x=wid*0.73, y=h1)
    lb6.place(x=wid*0.82, y=h2)
    bt3.place(x=wid*0.82, y=h3)

def com(n):
    i = 0
    while i < len(widg):
        widg[i].place_forget()
        i += 1
    widg[n].place(x=esx, y=h1)
    bck.place(x=wid*0.02, y=hei*0.02)
    espec.place(x=wid*0.6, y=hei*0.3)
    buy.place(x=wid*0.21, y=hei*0.65)

def com1():
    com(0)
    espec['text'] = 'Octa-core \n\n 6 GB RAM \n\n 128 GB \n\n MicroSD de até 512 GB \n\n Android 9.0 Pie'

def com2():
    com(2)
    espec['text'] = 'Octa-core \n\n 6 GB RAM \n\n 128 GB \n\n Android 9.0 Pie'

def com3():
    com(4)
    espec['text'] = 'Octa-core \n\n 8 GB RAM \n\n 256 GB \n\n NanoSD de até 256 GB \n\n Android 9.0 Pie'

wid = janela.winfo_screenwidth()
hei = janela.winfo_screenheight()

esx = wid*0.12

espec = Label(janela, font=('Times', 15))

p = PhotoImage(file='p.png')
bck = Button(janela, border=0, text='<==', command=wdg, image=p)

buy = Button(janela, font=('Times', 13), text='Comprar', command=obg)

tit = Label(janela, font=('Times', 30), text='Loja')
tit.place(x=wid*0.47, y=hei*0.05)

h1 = hei*0.24
h2 = hei*0.63
h3 = hei*0.7

p1 = PhotoImage(file='p1.png')
lb1 = Label(janela, image=p1)
lb2 = Label(janela, font=('Times', 17), text='R$4.200')
bt1 = Button(janela, font=('Times', 13), text='Comprar', command=com1)

p2 = PhotoImage(file='p2.png')
lb3 = Label(janela, image=p2)
lb4 = Label(janela, font=('Times', 17), text='R$2.800')
bt2 = Button(janela, font=('Times', 13), text='Comprar', command=com2)

p3 = PhotoImage(file='p3.png')
lb5 = Label(janela, image=p3)
lb6 = Label(janela, font=('Times', 17), text='R$3.500')
bt3 = Button(janela, font=('Times', 13), text='Comprar', command=com3)

widg = [lb1, lb2, lb3, lb4, lb5, lb6, bt1, bt2, bt3, tit]

wdg()

janela.state('zoomed')
janela.title('Loja')
janela.mainloop()
