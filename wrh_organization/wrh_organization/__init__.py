import os

__version__ = None
try:
    with open(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'VERSION')) as f:
        __version__ = f.readline().strip()
except IOError:
    __version__ = None
