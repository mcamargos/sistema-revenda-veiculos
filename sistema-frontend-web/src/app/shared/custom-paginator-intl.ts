import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
  // Traduzir "Items per page"
  override itemsPerPageLabel = 'Itens por página:';
  // Traduzir "Next page"
  override nextPageLabel     = 'Próxima página';
  // Traduzir "Previous page"
  override previousPageLabel = 'Página anterior';
  // Traduzir "First page"
  override firstPageLabel    = 'Primeira página';
  // Traduzir "Last page"
  override lastPageLabel     = 'Última página';

  // Função para traduzir o range (ex: 1 - 5 of 10)
  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
}