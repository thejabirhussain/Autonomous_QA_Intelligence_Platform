from setuptools import setup, find_packages

setup(
    name="reqon-config",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "pydantic-settings>=2.0.0",
    ],
)
