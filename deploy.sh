#!/bin/bash

npm run build ;
git add dist -f ; 
git commit ; 
git subtree push --prefix dist origin gh-pages
