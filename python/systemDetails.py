import platform

print("="*40, "Sistem Information", "="*40)

uname = platform.uname()
print(f"System: {uname.system}")
print(f"Node name: {uname.node}")
print(f"Release: {uname.release}")
print(f"Version: {uname.version}")
print(f"Machine: {uname.machine}")
print(f"Processor: {uname.processor}")