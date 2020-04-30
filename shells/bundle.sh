
if [ -d "./bundle" ]; then
  rm -rf bundle
fi

mkdir bundle

cp -r src/components/ bundle/components

# cp -r src/assets/styles bundle/styles