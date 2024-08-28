class Player:

    def __init__(self, id:str):
        self.id = id
        self.name = id
        self.inGame = False
    
    def getID(self):
        return self.id

    def getName(self):
        return self.name

    def getInGame(self):
        return self.inGame
    
    def changeName(self, newName):
        self.name = newName



        
