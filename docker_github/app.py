import sys

if __name__ == "__main__":
    args = sys.argv[1:]
    if args:
        print("Argumentos recibidos:", " ".join(args))
    else:
        print("Hola desde el script Python por defecto.")
