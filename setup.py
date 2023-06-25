from setuptools import setup

setup(
    name='remla-lib',
    version='2.0.0',
    description='Version-aware library',
    author='REMLA Team 15',
    packages=['version_util_python'],
    install_requires=[
        'requests==2.31.0',
    ],
)
