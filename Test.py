#This file is just for testing
#Last edited: 22.04.2020
#Functioning programms are inbetween hashtags
#Functions can be activated by removing the """ under the hashtags and before the next hashtags

#################### Integers, floats, strings, booleans and if
"""
integer = 3
float = 2.8
boolean = False
n = None

if integer > 2:
    name = input("Input your Name: ")
    print (f"hello, {name}!")
    print (f"integer is {integer}!")
    print (f"float is {float}!")
    print (f"boolean is {boolean}!")
    print (f"n is {n}!")
elif integer <2:
    print (f"{integer}is smaller than 2")
else:
 print ("integer is 2")
"""

################### Loops
"""
names = ["Alice", "Bob", "Charlie"]
for i in names:
    print(i)
"""

################### Sets
#Items in a set are unique. There python will only print one 3
"""
s = set ()
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)
print(s)
"""

################### Dictonaries
"""
ages = {"Alice": 20, "Bob":27}
ages["Charlie"]=30
ages["Alice"] +=1
print(ages)
"""

#################### Functions
"""
def square (x):
    return x * x
def main():
        for i in range(10):
            #First Bracket is placeholder for i, last playeholder is for Square. Following Format used in Python versions before 3.6
            print ("{} square is {} (old)".format (i, square (i)))
            #Following format can be used in Versions after 3.6. First Version will work too.
            print (f"{i} square is {square(i)}")
if __name__ == "__main__":
    main()
"""

################## Modules
#From filename import function

################## Classes
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
p = Point (3,5)
print(p.x)
print(p.y)







































#End
