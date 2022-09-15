import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-duo-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] py-6 px-8 flex justify-between itens-center">
        <div>
          <strong className="text-2xl text-white block">Não encountrou seu duo?</strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white flex items-center gap-3 hover:bg-violet-600 rounded">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}