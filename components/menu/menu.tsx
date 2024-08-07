import { pages } from '@/common/constants';
import Link from 'next/link';
import _ from 'lodash';

export default function Menu() {
  const pagesClone: [{ href: string; name: string }] = _.cloneDeep(pages);

  return (
    <nav className="w-1/4 h-screen p-4 bg-orange-500">
      <ul>
        {pagesClone.map((page, index) =>
          <li key={`${page}-${index}`} className="p-2">
            <Link href={page.href}>
              {page.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
