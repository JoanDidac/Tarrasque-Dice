import os
with open('diag_output.txt', 'w') as f:
    f.write(f"CWD: {os.getcwd()}\n")
    try:
        f.write(f"Contents of .: {os.listdir('.')}\n")
    except Exception as e:
        f.write(f"Error listing .: {e}\n")
    try:
        f.write(f"Contents of public: {os.listdir('public')}\n")
    except Exception as e:
        f.write(f"Error listing public: {e}\n")
    try:
        f.write(f"Contents of public/products: {os.listdir('public/products')}\n")
    except Exception as e:
        f.write(f"Error listing public/products: {e}\n")
