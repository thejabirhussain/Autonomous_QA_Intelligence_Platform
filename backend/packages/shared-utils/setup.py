from setuptools import setup, find_packages

setup(
    name="reqon-utils",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "structlog>=24.1.0",
    ],
)
