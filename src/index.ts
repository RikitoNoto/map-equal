export function mapEqual<T, E>(map1: Map<T, E>, map2: Map<T, E>): boolean{
  if(map1.size !== map2.size) return false;

  for (const key1 of map1.keys()) {
    let hasSameKey = false;
    for (const key2 of map2.keys()) {
      if(key1 === key2){
        hasSameKey = true;
        if(map1.get(key1) !== map2.get(key2)) return false;
        break;
      }
    }

    if(!hasSameKey) return false;
  }

  return true;
}
