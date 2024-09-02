class Player:
    def __init__(self, id: str):
        self.id = id
        self.name = id
        self.inGame = False

    def get_id(self):
        return self.id

    def get_name(self):
        return self.name

    def get_in_game(self):
        return self.inGame

    def change_name(self, newName):
        self.name = newName
